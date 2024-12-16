import { animated, useSpring } from '@react-spring/web';
import { NativeProps, withNativeProps } from 'an-mobile/utils/native-props';
import { useMotionReduced } from 'an-mobile/utils/reduce-and-restore-motion';
import { mergeProps } from 'an-mobile/utils/with-default-props';
import classNames from 'classnames';
import React from 'react';

const classPrefix = 'adm-spin-loading';

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
};

export type SpinLoadingProps = {
  color?: keyof typeof colorRecord | string;
} & NativeProps<'--color' | '--size'>;

const defaultProps = {
  color: 'default',
};

const circumference = 15 * 3.14159265358979 * 2

const SpinLoading: React.FC<SpinLoadingProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const motionReduced = useMotionReduced()
  const { percent } = useSpring({
    cancel: motionReduced,
    loop: {
      reverse: true,
    },
    from: {
      percent: 80,
    },
    to: {
      percent: 30,
    },
    config: {
      duration: 1200,
    },
  })
  return withNativeProps(
    props,
    <animated.div className={classNames(classPrefix)}>
      <svg className={`${classPrefix}-svg`} viewBox="0 0 32 32">
        <animated.circle className={`${classPrefix}-fill`}      fill='transparent'
          strokeWidth='2'
          strokeDasharray={circumference}
          strokeDashoffset={percent}
          strokeLinecap='square' cx="16" cy="16" r="15"  />
      </svg>
    </animated.div>
  );
};

export default SpinLoading;
