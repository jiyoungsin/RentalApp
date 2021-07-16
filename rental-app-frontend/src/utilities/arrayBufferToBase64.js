const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    let base64Flag = 'data:image/jpeg;base64,';
    let bytes = [].slice.call(new Uint8Array(buffer.data));
    bytes.forEach((b) => {
        binary += String.fromCharCode(b);
    });

    let binaryString = window.btoa(binary);

    return base64Flag + binaryString;
};

export default arrayBufferToBase64;