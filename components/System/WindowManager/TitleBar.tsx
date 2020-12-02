import styles from '@/styles/System/WindowManager/Window.module.scss';

import type { TitleBarProps } from '@/types/components/System/WindowManager/TitleBar';

import Icon from '@/components/System/Icon';
import { faChevronLeft, faChevronRight, faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TitleBar: React.FC<TitleBarProps> = ({
  icon,
  name,
  onMaximize,
  onMinimize,
  onClose
}) => {
  return (
    <div className={styles.titlebar}>
      <header className="handle" onDoubleClick={onMaximize}>
        <h1>
          <figure>
            <Icon src={icon} height={16} width={16} />
            <figcaption>{name}</figcaption>
          </figure>
        </h1>
        <nav className="cancel">
          <button id={styles.close} type="button" onClick={onClose}>
            <FontAwesomeIcon size="xs" icon={faTimes} />
          </button>
          <button id={styles.minimize} type="button" onClick={onMinimize}>
            <FontAwesomeIcon size="xs" icon={faMinus} />
          </button>
          <button id={styles.maximize} type="button" onClick={onMaximize}>
            <FontAwesomeIcon size="xs" icon={faPlus} />
          </button>
        </nav>
      </header>
      <nav className={`${styles.toolbar} handle`}>
        <button type="button">
          <FontAwesomeIcon size="xs" icon={faChevronLeft} />
        </button>
        <button type="button" className={styles.enabled}>
          <FontAwesomeIcon size="xs" icon={faChevronRight} />
        </button>
      </nav>
    </div>
  );
};

export default TitleBar;
