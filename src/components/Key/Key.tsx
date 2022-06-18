import { FunctionComponent } from 'react';

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
};

export const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, ...rest } = props;
  return (
    <button
      className={clsx(styles.key, styles[type])}
      type="button"
      {..rest}
      >{labe} </button>
  )
};
