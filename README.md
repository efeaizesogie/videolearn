# VideoLearn

VideoLearn is a React application that allows users to manage and watch YouTube videos in a structured learning environment.

## Features

- **Video Management**: Add, view, and delete YouTube videos
- **Video Player**: Watch videos directly within the application
- **Video Details**: Store and display video names and descriptions
- **Responsive Design**: Works on various screen sizes

## How to Use

1. **Browse Videos**: View your collection of saved videos in the sidebar
2. **Watch Videos**: Click on a video to watch it in the main player
3. **Add Videos**: Use the "Add Video" card to add new YouTube videos
   - Enter a video name
   - Add a description
   - Paste a YouTube URL
4. **Delete Videos**: Remove unwanted videos with the trash icon

## Technical Details

- Built with React and TypeScript
- Uses Vite for fast development and building
- Styled with modern CSS
- YouTube video embedding

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser to the URL displayed in the terminal

## Project Structure

- `src/pages/VideoLearn.tsx`: Main component with video management functionality
- `src/components/`: UI components including navigation and video cards
- `src/constants.ts`: Type definitions and constants

## License

This project is open source and available under the MIT license.
