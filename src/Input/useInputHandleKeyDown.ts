import { useIsomorphicLayoutEffect } from 'ahooks';

interface InputHandleKeyDownProps<T> {
  onEnterPress?: (e: React.KeyboardEvent<T>) => void;
  onKeyDown?: (e: React.KeyboardEvent<T>) => void;
  enterKeyHint?: React.InputHTMLAttributes<HTMLInputElement>['enterKeyHint'];
  nativeInputRef: React.RefObject<T>;
}

export default function useInputHandleKeyDown<
  T extends HTMLInputElement | HTMLTextAreaElement,
>(props: InputHandleKeyDownProps<T>) {
  const { onEnterPress, onKeyDown, enterKeyHint, nativeInputRef } = props;
  const handleKeydown = (e: React.KeyboardEvent<T>) => {
    if (onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
      onEnterPress(e);
    }
    onKeyDown?.(e);
  };

  useIsomorphicLayoutEffect(() => {
    const ele = nativeInputRef.current;

    if (!enterKeyHint || !ele) return;

    ele.setAttribute('enterkeyhint', enterKeyHint);
    return () => {
      ele.removeAttribute('enterkeyhint');
    };
  }, [enterKeyHint]);

  return handleKeydown;
}
