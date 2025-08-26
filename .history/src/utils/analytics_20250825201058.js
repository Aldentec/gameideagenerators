// src/utils/analytics.js
// Utility functions for tracking generator usage and other site interactions

/**
 * Track generator usage with detailed information
 * @param {string} generatorName - Name of the generator (e.g., "Game Mechanic")
 * @param {string} category - Category the generator belongs to (e.g., "Core Elements")
 * @param {string} result - The generated result (optional, for result analysis)
 */
export const trackGeneratorUsage = (generatorName, category = 'Unknown', result = null) => {
  if (typeof gtag !== 'undefined') {
    // Main generator usage event
    gtag('event', 'generator_used', {
      event_category: 'Generator Interaction',
      event_label: generatorName,
      generator_name: generatorName,
      generator_category: category,
      custom_parameter_1: generatorName.toLowerCase().replace(/\s+/g, '_'),
      value: 1
    });

    // General engagement tracking
    gtag('event', 'generate_idea', {
      event_category: 'Creative Tools',
      event_label: 'Idea Generated',
      generator_type: generatorName,
      value: 1
    });

    // Track result length for analysis (if result provided)
    if (result) {
      gtag('event', 'idea_complexity', {
        event_category: 'Generated Content',
        event_label: generatorName,
        result_length: result.length,
        custom_parameter_2: result.length > 50 ? 'complex' : 'simple'
      });
    }

    // Category-specific tracking
    gtag('event', 'category_engagement', {
      event_category: 'Generator Categories',
      event_label: category,
      generator_within_category: generatorName,
      value: 1
    });
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Tracking:', {
      generator: generatorName,
      category: category,
      resultLength: result ? result.length : 'N/A'
    });
  }
};

/**
 * Track category tab switching
 * @param {string} categoryName - Name of the category switched to
 * @param {string} previousCategory - Previous category (optional)
 */
export const trackCategorySwitch = (categoryName, previousCategory = null) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'category_switch', {
      event_category: 'Navigation',
      event_label: categoryName,
      previous_category: previousCategory,
      navigation_type: 'category_tab'
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('Category Switch:', categoryName);
  }
};

/**
 * Track user engagement patterns
 * @param {string} actionType - Type of engagement (e.g., 'multiple_generators', 'return_user')
 * @param {object} metadata - Additional metadata about the engagement
 */
export const trackUserEngagement = (actionType, metadata = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'user_engagement', {
      event_category: 'User Behavior',
      event_label: actionType,
      engagement_type: actionType,
      ...metadata
    });
  }
};

/**
 * Track popular generator combinations (when users use multiple generators in a session)
 */
let usedGenerators = [];

export const trackGeneratorSession = (generatorName) => {
  usedGenerators.push({
    name: generatorName,
    timestamp: Date.now()
  });

  // Track if user is using multiple generators (engaged user)
  if (usedGenerators.length === 2) {
    trackUserEngagement('multiple_generators_used', {
      generator_count: 2,
      session_generators: usedGenerators.map(g => g.name).join(', ')
    });
  }

  // Track power users (5+ generators in session)
  if (usedGenerators.length === 5) {
    trackUserEngagement('power_user_behavior', {
      generator_count: 5,
      session_duration_estimate: Date.now() - usedGenerators[0].timestamp
    });
  }

  // Clear session after 30 minutes of inactivity
  setTimeout(() => {
    usedGenerators = [];
  }, 30 * 60 * 1000);
};

/**
 * Track specific high-value interactions
 */
export const trackHighValueAction = (actionName, details = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'high_value_action', {
      event_category: 'Conversions',
      event_label: actionName,
      value: 10, // Assign higher value to important actions
      ...details
    });
  }
};

/**
 * Track errors or issues
 */
export const trackError = (errorType, errorDetails) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'error_occurred', {
      event_category: 'Errors',
      event_label: errorType,
      error_details: errorDetails,
      fatal: false
    });
  }
};