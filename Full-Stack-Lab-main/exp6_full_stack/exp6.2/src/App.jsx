import { useState } from 'react'
import './App.css'

export default function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const [submitted, setSubmitted] = useState(false)

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|[a-z]{2,})$/i
    return emailRegex.test(email)
  }

  // Password validation function
  const validatePassword = (password) => {
    const conditions = {
      hasCapitalLetter: /[A-Z]/.test(password),
      hasMinLength: password.length >= 5,
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    }
    
    return conditions
  }

  const checkPasswordValid = (conditions) => {
    return conditions.hasCapitalLetter && 
           conditions.hasMinLength && 
           conditions.hasNumber && 
           conditions.hasSpecialChar
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error when user starts typing
    setErrors({
      ...errors,
      [name]: ''
    })
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format. Must contain @ and a valid domain (.com, .in, or country code)'
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else {
      const conditions = validatePassword(formData.password)
      if (!checkPasswordValid(conditions)) {
        const missingConditions = []
        if (!conditions.hasCapitalLetter) missingConditions.push('capital letter')
        if (!conditions.hasMinLength) missingConditions.push('at least 5 characters')
        if (!conditions.hasNumber) missingConditions.push('at least one number')
        if (!conditions.hasSpecialChar) missingConditions.push('at least one special character')
        newErrors.password = `Password must have: ${missingConditions.join(', ')}`
      }
    }

    setErrors(newErrors)

    // If no errors, submit
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      console.log('Form Submitted:', formData)
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ email: '', password: '' })
        setSubmitted(false)
      }, 5000)
    }
  }

  const passwordConditions = validatePassword(formData.password)

  return (
    <div className="container">
      <div className="form-card">
        <h1>Login Form</h1>
        <p className="subtitle">Client-Side Validation</p>

        {submitted && <div className="success-message">✓ Form submitted successfully!</div>}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email ID *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email (e.g., user@example.com)"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}

            {/* Password validation indicator */}
            {formData.password && (
              <div className="password-criteria">
                <p className="criteria-title">Password must have:</p>
                <div className={`criteria-item ${passwordConditions.hasCapitalLetter ? 'valid' : ''}`}>
                  <span className="checkbox">{passwordConditions.hasCapitalLetter ? '✓' : '✗'}</span>
                  <span>Capital letter (A-Z)</span>
                </div>
                <div className={`criteria-item ${passwordConditions.hasNumber ? 'valid' : ''}`}>
                  <span className="checkbox">{passwordConditions.hasNumber ? '✓' : '✗'}</span>
                  <span>At least one number (0-9)</span>
                </div>
                <div className={`criteria-item ${passwordConditions.hasSpecialChar ? 'valid' : ''}`}>
                  <span className="checkbox">{passwordConditions.hasSpecialChar ? '✓' : '✗'}</span>
                  <span>At least one special character (!@#$%^&*)</span>
                </div>
                <div className={`criteria-item ${passwordConditions.hasMinLength ? 'valid' : ''}`}>
                  <span className="checkbox">{passwordConditions.hasMinLength ? '✓' : '✗'}</span>
                  <span>At least 5 characters</span>
                </div>
              </div>
            )}
          </div>

          <button type="submit" className="submit-btn">Login</button>
        </form>

        <p className="form-note">* Both fields are required</p>
      </div>
    </div>
  )
}
