import type { JSX } from 'preact';
import YouTubeVideoId from 'youtube-video-id';

import { useStore } from '../../hooks';

export default function Input() {
  const setVideoId = useStore((state) => state.setVideoId);

  function onInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    setVideoId(YouTubeVideoId(event.currentTarget.value));
  }

  return (
    <div class="flex justify-center mb-4">
      <form class="container mx-4">
        <label
          for="input"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Paste YouTube URL
        </label>

        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
            id="input"
            placeholder="Paste YouTube URL"
            required
            type="search"
            onInput={onInput}
          />
        </div>
      </form>
    </div>
  );
}
