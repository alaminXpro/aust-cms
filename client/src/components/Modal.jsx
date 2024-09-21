import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const Modal = forwardRef((props, ref) => {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        setOpened(props.opened);
    }, [props.opened]);

    const scrollbarWidth = () => {
        const scrollDiv = document.createElement('div');
        scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
        document.body.appendChild(scrollDiv);
        const result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return result;
    };

    useImperativeHandle(ref, () => ({
        open() {
            const ele = document.querySelector('html');
            ele.classList.add('overflow-hidden');
            ele.style.marginRight = scrollbarWidth() + 'px';

            setOpened(true);

            // this.$emit('onopen');
        },
    }));

    const closeByBackdrop = () => {
        if (!props.modal) {
            close();
        }
    };

    const close = () => {
        const ele = document.querySelector('html');
        ele.style.marginRight = '';
        ele.classList.remove('overflow-hidden');

        setOpened(false);

        // this.$emit('onclose');
    };

    return (
        <div>
            {opened && (
                <div className="fixed inset-0 z-[999] h-full w-full overflow-y-auto overflow-x-hidden bg-[#343434]/60" onClick={() => closeByBackdrop()}>
                    <div
                        className={`modal-popup-container absolute inset-0 h-full w-full text-center before:inline-block before:h-full before:align-middle ${
                            props.full ? 'px-0 sm:px-3' : 'px-3'
                        }`}
                    >
                        <div className="inline-block w-full text-left align-middle">
                            <div
                                className={`relative mx-auto max-w-full overflow-hidden rounded bg-white p-8 text-sm text-gray shadow-lg ${
                                    props.full ? 'my-0 sm:my-8' : 'my-8'
                                } ${props.contentClass ? props.contentClass : ''}`}
                                style={props.width ? { width: props.width + 'px' } : { width: '550px' }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    v-if="closeBtn"
                                    className={`absolute top-2.5 right-2.5 z-10 flex h-8 w-8 items-center justify-center text-base text-black !no-underline opacity-100 hover:opacity-70 ${props.closeBtnClass}`}
                                    onClick={() => close()}
                                >
                                    ✕
                                </button>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});
export default Modal;
