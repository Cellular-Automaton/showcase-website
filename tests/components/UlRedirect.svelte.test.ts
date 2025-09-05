import { expect, test, vi } from 'vitest'
import UlRedirect from '$lib/components/UlRedirect.svelte'
import { mount, unmount } from 'svelte'
import { render, screen } from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'

test('UlRedirect - without header', () => {
  // const user = userEvent.setup()
  const mockChildren = vi.fn(() => 'child');
  const { container } = render(UlRedirect, { props: { ref: 'tutu', children: mockChildren, size: 'larger', } })

  expect(mockChildren).toHaveBeenCalled();
  const a = container.querySelector('a');
  expect(a?.textContent).toBe('child')
})
