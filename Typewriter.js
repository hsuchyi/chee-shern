class Typewriter {
    constructor(element, options = {}) {
        // The DOM element where the text will be typed
        this.element = element;
        
        // The array of strings to type
        this.texts = options.texts || ['Hello World!'];
        
        // Configuration settings with default values
        this.typeSpeed = options.typeSpeed || 120;
        this.backspaceSpeed = options.backspaceSpeed || 60;
        this.delayBetweenTexts = options.delayBetweenTexts || 2000;
        this.startDelay = options.startDelay || 500;
        this.loop = options.loop !== false; // Default to true

        // Internal state variables
        this.textIndex = 0; // Tracks the current string in the texts array
        this.charIndex = 0; // Tracks the current character in the string
        this.isDeleting = false; // Flag to determine if typing or backspacing

        // Start the typing effect after the initial delay
        setTimeout(() => this.type(), this.startDelay);
    }

    /**
     * The core method that handles the typing and backspacing logic.
     */
    type() {
        // Get the current text from the array
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            // --- Backspacing Logic ---
            // Remove one character at a time
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;

            // Check if backspacing is complete
            if (this.charIndex === 0) {
                this.isDeleting = false;
                this.textIndex++; // Move to the next text

                // If looping is disabled and we've reached the end, stop
                if (!this.loop && this.textIndex >= this.texts.length) {
                    return;
                }

                // Loop back to the beginning of the text array if needed
                this.textIndex = this.textIndex % this.texts.length;
                
                // Pause before starting to type the next string
                setTimeout(() => this.type(), this.typeSpeed);
            } else {
                // Continue backspacing
                setTimeout(() => this.type(), this.backspaceSpeed);
            }

        } else {
            // --- Typing Logic ---
            // Add one character at a time
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;

            // Check if typing is complete for the current text
            if (this.charIndex === currentText.length) {
                this.isDeleting = true;
                // Pause before starting to backspace
                setTimeout(() => this.type(), this.delayBetweenTexts);
            } else {
                // Continue typing
                setTimeout(() => this.type(), this.typeSpeed);
            }
        }
    }
}
