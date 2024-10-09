import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/login')({
  component: () => <div>Hello /_home/login!</div>,
})
