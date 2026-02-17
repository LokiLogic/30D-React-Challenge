import React from 'react';
import './RegistrationForm.css';

function RegistrationForm() {

    const [formData, setFormData] = React.useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = React.useState({});
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((setFormData) => ({
            ...setFormData,
            [name]: value,
        }));
    };

    if (errors[name]) {
        setErrors({
            ...errors,
            [name]: '',
        });
    }


    const validate = () => {
        let tempErrors = {};
        if (!formData.username.trim()) {
            tempErrors.username = 'Username is required';
        } else if (formData.username.length < 3) {
            tempErrors.username = 'Username must be at least 3 characters';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Email is not valid';
        }

        if (!formData.password) {
            tempErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.confirmPassword !== formData.password) {
            tempErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
        }
    };

    return (
        <div className='form-container'>
            {isSubmitted ? (
                <div className='success-message'>
                    <h2>Registration Successful!</h2>
                    <p>Welcome to our platform, {formData.username}!</p>
                    <button onClick={handleSubmit} className='reg-form' NoValidate>Registration</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className='reg-form' noValidate>
                    <h2>Register</h2>
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            className={errors.username ? 'error-input' : ''}
                        />
                        {errors.username && <span className='error-text'>{errors.username}</span>}
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error-input' : ''}
                        />
                        {errors.email && <span className='error-text'>{errors.email}</span>}
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? 'error-input' : ''}
                        />
                        {errors.password && <span className='error-text'>{errors.password}</span>}
                    </div>

                    <div className='form-group'>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input
                            type='password'
                            id='confirmPassword'
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? 'error-input' : ''}
                        />
                        {errors.confirmPassword && <span className='error-text'>{errors.confirmPassword}</span>}
                    </div>

                    <button type='submit' className='submit-btn '>Register</button>
                </form>
            )}
        </div>

    )
};

export default RegistrationForm;
