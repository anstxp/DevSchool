class VigenèreCipher {
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
    }

    encode(message) {
        let encodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            if (this.alphabet.includes(char)) {
                const charIndex = this.alphabet.indexOf(char);
                const keyChar = this.key[i % this.key.length];
                const keyIndex = this.alphabet.indexOf(keyChar);
                const encodedCharIndex = (charIndex + keyIndex) % this.alphabet.length;
                encodedMessage += this.alphabet[encodedCharIndex];
            } else {
                encodedMessage += char;
            }
        }
        return encodedMessage;
    }

    decode(encodedMessage) {
        let decodedMessage = '';
        for (let i = 0; i < encodedMessage.length; i++) {
            const char = encodedMessage[i];
            if (this.alphabet.includes(char)) {
                const charIndex = this.alphabet.indexOf(char);
                const keyChar = this.key[i % this.key.length];
                const keyIndex = this.alphabet.indexOf(keyChar);
                const decodedCharIndex = (charIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
                decodedMessage += this.alphabet[decodedCharIndex];
            } else {
                decodedMessage += char;
            }
        }
        return decodedMessage;
    }
}
