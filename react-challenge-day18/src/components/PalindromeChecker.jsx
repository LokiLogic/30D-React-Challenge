import React, { useEffect, useState, useRef } from 'react';
import './PalindromeChecker.css';

function PalindromeChecker() {
    const [text, setText] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(null);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const checkPalindrome = () => {
        if (!text) return;

        const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedText = cleanText.split('').reverse().join('');
        setIsPalindrome(cleanText === reversedText);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            checkPalindrome();
        }
    };
    return (
        <div className='palindrome-card'>
            <h2>Palindrome Checker</h2>
            <p>write a word to check if it is a palindrome</p>
            <div className='input-area'>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder='Enter text'
                    aria-label='Enter text to check'
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        setIsPalindrome(null);
                    }}
                    onKeyDown={handleKeyDown}
                />
                <button type="button" onClick={checkPalindrome}>Check</button>
            </div>
            {isPalindrome !== null && (
                <div className={`result ${isPalindrome ? 'success' : 'error'}`}>
                    {isPalindrome ? (
                        <span>✅ "{text}" is a palindrome!</span>
                    ) : (
                        <span>❌ "{text}" is not a palindrome.</span>
                    )}
                </div>
            )}
        </div>
    );
}

export default PalindromeChecker;

