

export const debounce = <F extends (...args: any[]) => void>(func: F, wait: number) => {
    let timeout: NodeJS.Timeout | undefined;
    return function(this: ThisParameterType<F>, ...args: Parameters<F>) {
        if (timeout !== undefined) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
};
