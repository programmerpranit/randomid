# Claude Task Log

## Commands to run during code review
- yarn lint
- yarn typecheck

## Project Architecture

### Tech Stack
- **Framework**: Next.js with App Router and Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI with Tailwind CSS
- **Authentication**: Custom JWT implementation
- **Package Manager**: Yarn

### Feature Development Flow

When creating a new feature, follow this standardized flow:

1. **Create Prisma Schema** in `prisma/schema.prisma`
2. **Create Zod Schema** in `src/schema/[feature].ts` for validation
3. **Create Admin CRUD Pages** in `app/admin/[feature]/`:
   - `page.tsx` - Server-side entry point (authentication, data fetching)
   - `actions.ts` - Server actions (getAll with pagination, deleteById)
   - `[Feature]Table.tsx` - Client component with paginated list
4. **Create Form Pages** in `app/admin/[feature]/[id]/`:
   - Use `[id]` pattern where `id='new'` for create, otherwise update
   - `page.tsx` - Server-side entry point
   - `actions.ts` - Server actions (create, update, getById)
   - `[Feature]Form.tsx` - Client form component with Zod validation

### Code Conventions

#### Server Actions
- Always return consistent response format: `{ success: boolean, data?: any, error?: string }`
- Use pagination, search, and sorting for list endpoints
- Handle errors gracefully with try-catch blocks

#### Forms
- Use shared form components from `src/components/forms/` to avoid repetition
- Implement dual-purpose forms (create/edit) using ID detection
- Always validate with Zod schemas before submission

#### Data Tables
- Implement search, sorting, and pagination
- Use `usePagination` hook for state management
- Include action buttons for edit/delete operations

#### File Naming
- Components: PascalCase (e.g., `UserForm.tsx`)
- Server actions: camelCase (e.g., `actions.ts`)
- Schemas: camelCase (e.g., `user.ts`)

### Important Patterns

#### Response Pattern for Server Actions
```typescript
return { success: true, data: result };
// or
return { success: false, error: error.message };
```

#### Form ID Pattern
```typescript
// In page component
const isNew = params.id === 'new';
if (isNew) {
  // Create mode
} else {
  // Edit mode - fetch existing data
}
```

#### Pagination Hook Usage
```typescript
const { page, pageSize, setPage } = usePagination();
```

## Recent Implementations

### Users Data Table (2023-04-14)
- Server actions with pagination, search, and sorting
- usePagination hook for table state management
- UsersDataTable component with full CRUD operations
- Server-side pagination with proper TypeScript types

### Blog Category CRUD (2025-04-16)
- Standard success/data response pattern in server actions
- Dual-purpose form for create/edit operations
- Data table with sorting, pagination, and search
- Proper navigation flow between list and form pages

## Environment Setup

### Required Environment Variables
- Database connection string in `.env`
- Supabase credentials if using file storage
- JWT secret for authentication

### Database Setup
1. Run migrations: `yarn prisma migrate dev`
2. Generate client: `yarn prisma generate`
3. Seed database if needed: `yarn prisma db seed`

## Package Management
- Always use `yarn` for installing dependencies
- Run `yarn install` to install packages
- Use `yarn add [package]` for new dependencies
- Use `yarn add -D [package]` for dev dependencies

## Testing Guidelines
- Always run `yarn lint` before committing
- Run `yarn typecheck` to ensure type safety
- Test CRUD operations thoroughly
- Verify form validation works correctly
- Check pagination and search functionality