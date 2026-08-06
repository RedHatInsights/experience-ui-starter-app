const enforceStoryPatterns = require('./rules/enforce-story-patterns');
const requireUseTableState = require('./rules/require-use-table-state');
const noDirectUserType = require('./rules/no-direct-user-type');

module.exports = {
  rules: {
    'enforce-story-patterns': enforceStoryPatterns,
    'require-use-table-state': requireUseTableState,
    'no-direct-user-type': noDirectUserType,
  },
};
