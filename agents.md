# AI Agents & Assistants Guide

This document outlines the different AI agents and assistants available for this project, along with their specific use cases and capabilities.

## Overview

This project uses AI assistants to help with various development tasks. Each agent is specialized for different aspects of the development workflow.

## Primary Agent: Claude (via Cursor)

### Role
Primary coding assistant for all development tasks.

### Capabilities
- Code generation and refactoring
- Feature implementation following project architecture
- Bug fixing and debugging
- Code review and optimization
- Documentation generation

### Usage Guidelines
- Follow the architecture defined in `architecture.md`
- Adhere to conventions in `CLAUDE.md`
- Use design system from `DESIGN_GUIDE.md`
- Follow patterns in `.cursorrules`

### When to Use
- Implementing new features
- Refactoring existing code
- Debugging issues
- Code reviews
- Writing tests
- Database schema changes
- Creating forms and tables

## Specialized Agents

### 1. Architecture Agent
**Purpose**: Ensures code follows the established architecture patterns

**Responsibilities**:
- Validates feature implementation against architecture.md
- Ensures proper folder structure (app/admin/[feature]/)
- Verifies server actions follow response pattern
- Checks form implementation uses dual-purpose pattern

**Trigger Conditions**:
- When creating new features
- When refactoring existing features
- When reviewing code structure

### 2. Design System Agent
**Purpose**: Ensures UI components follow the Trendy Bollywood design system

**Responsibilities**:
- Validates typography usage (Outfit font, light weights)
- Ensures color palette compliance (Amber/Stone)
- Checks spacing and layout patterns
- Verifies component styling matches design guide

**Trigger Conditions**:
- When creating UI components
- When styling pages
- When implementing forms
- When building data tables

### 3. Type Safety Agent
**Purpose**: Ensures proper TypeScript and Zod usage

**Responsibilities**:
- Validates Prisma type usage
- Ensures Zod schemas exist for all tables
- Checks type consistency across codebase
- Verifies form validation schemas

**Trigger Conditions**:
- When adding new database models
- When creating forms
- When implementing server actions
- During type checking

### 4. Code Quality Agent
**Purpose**: Maintains code quality and consistency

**Responsibilities**:
- Runs linting checks
- Validates naming conventions
- Ensures consistent error handling
- Checks response patterns in server actions

**Trigger Conditions**:
- Before commits
- During code reviews
- When fixing bugs
- After refactoring

## Agent Workflow

### Feature Development Workflow

1. **Planning Phase**
   - Architecture Agent: Validates feature structure
   - Type Safety Agent: Ensures schema requirements

2. **Implementation Phase**
   - Primary Agent (Claude): Implements feature
   - Design System Agent: Applies styling
   - Architecture Agent: Validates structure

3. **Review Phase**
   - Code Quality Agent: Runs checks
   - Type Safety Agent: Validates types
   - Architecture Agent: Verifies patterns

### Code Review Workflow

1. Run `yarn lint` (Code Quality Agent)
2. Run `yarn typecheck` (Type Safety Agent)
3. Review architecture compliance (Architecture Agent)
4. Review design system usage (Design System Agent)

## Agent Communication

### Context Sharing
All agents share context through:
- `.cursorrules` - Core conventions
- `architecture.md` - Feature patterns
- `CLAUDE.md` - Development guidelines
- `DESIGN_GUIDE.md` - UI/UX standards

### Response Patterns
Agents should:
- Reference relevant documentation
- Follow established patterns
- Provide consistent code style
- Use proper error handling

## Best Practices

### For Developers
1. Always reference `.cursorrules` when asking for help
2. Mention specific agent when requesting specialized tasks
3. Run code quality checks before requesting reviews
4. Follow the feature development flow strictly

### For Agents
1. Always check `.cursorrules` before making changes
2. Follow the architecture patterns exactly
3. Use existing components when possible
4. Maintain consistency with codebase style
5. Validate against design system for UI changes

## Agent Capabilities Matrix

| Task | Primary Agent | Architecture | Design System | Type Safety | Code Quality |
|------|--------------|--------------|---------------|-------------|--------------|
| New Feature | ✅ Primary | ✅ Validate | ✅ Style | ✅ Types | ✅ Review |
| Bug Fix | ✅ Primary | ⚠️ Check | - | ✅ Types | ✅ Review |
| Refactor | ✅ Primary | ✅ Validate | - | ✅ Types | ✅ Review |
| UI Component | ✅ Primary | - | ✅ Validate | ✅ Types | ✅ Review |
| Form Creation | ✅ Primary | ✅ Validate | ✅ Style | ✅ Schema | ✅ Review |
| Database Schema | ✅ Primary | ✅ Validate | - | ✅ Types | ✅ Review |
| Code Review | ✅ Primary | ✅ Validate | ✅ Validate | ✅ Validate | ✅ Validate |

Legend:
- ✅ Primary responsibility
- ✅ Validate/Check
- ⚠️ Optional check
- - Not applicable

## Troubleshooting

### Agent Not Following Patterns
- Reference `.cursorrules` explicitly
- Point to specific examples in codebase
- Show relevant section from architecture.md

### Design System Not Applied
- Reference DESIGN_GUIDE.md
- Show existing component examples
- Specify design tokens to use

### Type Errors
- Ensure Prisma client is generated
- Check Zod schema exists
- Verify type imports are correct

## Future Enhancements

Potential specialized agents to add:
- **Testing Agent**: Generates and validates tests
- **Performance Agent**: Optimizes queries and renders
- **Security Agent**: Validates authentication and authorization
- **Documentation Agent**: Generates and maintains docs

---

**Last Updated**: Based on architecture.md and CLAUDE.md
**Version**: 1.0

