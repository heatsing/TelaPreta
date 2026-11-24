'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { ShareSection } from './ShareSection';
import './monitor-test.css';

const stages = [
  {
    id: 'preto', name: 'Preto', hex: '#000000',
    screen: 'Observe pontos claros e áreas iluminadas perto das bordas com a luz do ambiente baixa.',
    pixel: 'Procure um ponto branco ou colorido que permaneça aceso no mesmo lugar.'
  },
  {
    id: 'branco', name: 'Branco', hex: '#FFFFFF',
    screen: 'Compare o brilho do centro com o das bordas e procure manchas ou pontos escuros.',
    pixel: 'Procure pontos escuros e anote a posição para conferir nas cores seguintes.'
  },
  {
    id: 'vermelho', name: 'Vermelho', hex: '#FF0000',
    screen: 'Procure pontos de outra cor e áreas onde o vermelho fica irregular.',
    pixel: 'Confira se o ponto suspeito escurece, desaparece ou continua com outra cor.'
  },
  {
    id: 'verde', name: 'Verde', hex: '#00FF00',
    screen: 'Observe a uniformidade do verde e volte à posição de qualquer ponto que tenha anotado.',
    pixel: 'Olhe o mesmo ponto sobre o verde e compare com o que viu no vermelho.'
  },
  {
    id: 'azul', name: 'Azul', hex: '#0000FF',
    screen: 'Procure pontos claros ou escuros e compare com as etapas vermelha e verde.',
    pixel: 'Veja se o ponto permanece escuro no azul ou aparece apenas em uma das cores primárias.'
  },
  {
    id: 'cinza', name: 'Cinza', hex: '#808080',
    screen: 'Procure faixas, manchas e mudanças de tom entre o centro e as bordas.',
    pixel: 'Confira novamente o ponto suspeito. Se parecer uma marca na superfície, limpe conforme a orientação do fabricante e repita.'
  }
];

function StepInstructions({ index, stage, observation, headingId }) {
  return (
    <div className="monitor-step-copy" aria-live="polite" aria-atomic="true">
      <p className="monitor-progress">Etapa {index + 1} de {stages.length}</p>
      <h2 id={headingId}>{stage.name}</h2>
      <p>{observation}</p>
    </div>
  );
}

export function MonitorTest({ url, share }) {
  const [index, setIndex] = useState(0);
  const [pixelMode, setPixelMode] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [completed, setCompleted] = useState(false);
  const dialog = useRef(null);
  const field = useRef(null);
  const surface = useRef(null);
  const opener = useRef(null);
  const nativeFullscreen = useRef(false);
  const stage = stages[index];
  const observation = pixelMode ? stage.pixel : stage.screen;
  const lastStage = index === stages.length - 1;
  const shareUrl = new URL(url);
  shareUrl.searchParams.set('etapa', stage.id);
  if (pixelMode) shareUrl.hash = 'pixel-morto';

  useEffect(() => {
    function restoreLink() {
      const { searchParams, hash } = new URL(window.location.href);
      const linkedIndex = stages.findIndex(({ id }) => id === searchParams.get('etapa'));
      setIndex(Math.max(0, linkedIndex));
      setPixelMode(hash === '#pixel-morto' || searchParams.get('modo') === 'pixel-morto');
      setCompleted(false);
    }

    function handleNativeFullscreenChange() {
      if (document.fullscreenElement === field.current) {
        nativeFullscreen.current = true;
      } else if (nativeFullscreen.current) {
        nativeFullscreen.current = false;
        if (dialog.current?.open) dialog.current.close();
      }
    }

    restoreLink();
    window.addEventListener('popstate', restoreLink);
    window.addEventListener('hashchange', restoreLink);
    document.addEventListener('fullscreenchange', handleNativeFullscreenChange);
    return () => {
      window.removeEventListener('popstate', restoreLink);
      window.removeEventListener('hashchange', restoreLink);
      document.removeEventListener('fullscreenchange', handleNativeFullscreenChange);
    };
  }, []);

  function selectStage(nextIndex) {
    setIndex(Math.max(0, Math.min(nextIndex, stages.length - 1)));
    setCompleted(false);
  }

  function selectMode(nextMode) {
    setPixelMode(nextMode);
    setCompleted(false);
  }

  async function enterFullscreen(event) {
    const modal = dialog.current;
    const target = field.current;
    if (modal.open) return;

    opener.current = event.currentTarget;
    setControlsVisible(true);
    setCompleted(false);
    modal.showModal();
    surface.current.focus({ preventScroll: true });
    if (!document.fullscreenEnabled || !target.requestFullscreen) return;

    try {
      await target.requestFullscreen({ navigationUI: 'hide' });
      if (!modal.open && document.fullscreenElement === target) await document.exitFullscreen();
    } catch {
      // The dialog already fills the browser viewport.
    }
  }

  async function restoreFocus() {
    if (document.fullscreenElement === field.current) {
      await document.exitFullscreen().catch(() => {});
    }
    if (!dialog.current?.open) opener.current?.focus({ preventScroll: true });
  }

  function handleFullscreenKey(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    selectStage(index + (event.key === 'ArrowRight' ? 1 : -1));
  }

  function advance() {
    if (lastStage) {
      setCompleted(true);
      dialog.current.close();
    } else {
      selectStage(index + 1);
    }
  }

  return (
    <>
      <section className="tool monitor-test" id="teste" aria-labelledby="monitor-stage-title" tabIndex={-1}>
        <div className="monitor-mode" role="group" aria-label="Modo de teste">
          <button type="button" aria-pressed={!pixelMode} onClick={() => selectMode(false)}>Teste de tela</button>
          <button type="button" id="pixel-morto" aria-pressed={pixelMode} onClick={() => selectMode(true)}>Teste de pixel morto</button>
        </div>
        <StepInstructions index={index} stage={stage} observation={observation} headingId="monitor-stage-title" />
        <button className="monitor-preview" type="button" aria-haspopup="dialog" style={{ '--monitor-color': stage.hex }} onClick={enterFullscreen}>
          <span><Icon name="fullscreen" /> Abrir em tela cheia</span>
        </button>
        <ol className="monitor-stages" role="list" aria-label="Etapas de cor">
          {stages.map(({ id, name, hex }, stepIndex) => (
            <li key={id}>
              <button type="button" aria-current={stepIndex === index ? 'step' : undefined} onClick={() => selectStage(stepIndex)}>
                <span className="monitor-chip" aria-hidden="true" style={{ '--monitor-color': hex }} />
                {name}
              </button>
            </li>
          ))}
        </ol>
        {completed && <p className="monitor-complete" role="status">Teste concluído. Compare os pontos que anotou em cada cor.</p>}
      </section>
      <div className="editorial monitor-share">
        <ShareSection copy={{ ...share, title: 'Compartilhar esta etapa' }} url={shareUrl.href} title={`Teste de monitor online · ${stage.name}`} />
      </div>
      <dialog className="monitor-dialog" ref={dialog} aria-label="Teste de monitor em tela cheia" onClose={restoreFocus}>
        <div className="monitor-fullscreen" ref={field} style={{ '--monitor-color': stage.hex }} onKeyDown={handleFullscreenKey}>
          <button
            className="monitor-surface"
            type="button"
            ref={surface}
            aria-label={controlsVisible ? 'Ocultar controles' : 'Mostrar controles'}
            aria-controls="monitor-controls"
            aria-expanded={controlsVisible}
            onClick={() => setControlsVisible(!controlsVisible)}
          />
          <div className="monitor-controls" id="monitor-controls" hidden={!controlsVisible}>
            <StepInstructions index={index} stage={stage} observation={observation} />
            <div className="monitor-actions">
              <button type="button" disabled={index === 0} onClick={() => selectStage(index - 1)}>Anterior</button>
              <button type="button" onClick={advance}>{lastStage ? 'Concluir teste' : 'Próxima cor'}</button>
              <button type="button" onClick={() => dialog.current.close()}>Sair da tela cheia</button>
            </div>
            <p className="monitor-keys">Toque na cor para ocultar ou mostrar os controles. Use ← ou → para trocar de etapa e Esc para sair.</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
