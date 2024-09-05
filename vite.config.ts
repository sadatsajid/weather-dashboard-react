import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import { splitVendorChunkPlugin } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        // splitVendorChunkPlugin(),
        visualizer({ open: true })
      ],
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          vendor: [
            'axios', 'nprogress', 'react-helmet-async', '@tanstack/react-query'
          ],
          'material-ui-core': [ // Core Components
            '@mui/material/Box', '@mui/material/Container', '@mui/material/Grid',
            '@mui/material/Typography'
          ],
          'material-ui-navigation': [ // Navigation
            '@mui/material/Drawer'
          ],
          'material-ui-surfaces': [ // Surfaces and Layout
            '@mui/material/Card', '@mui/material/Paper', '@mui/material/Divider'
          ],
          'material-ui-feedback': [ // Feedback and Loading
            '@mui/material/CircularProgress', '@mui/material/Collapse', '@mui/material/Tooltip'
          ],
          'material-ui-inputs': [ // Input Controls
            '@mui/material/Button', '@mui/material/IconButton', '@mui/material/TextField',
            '@mui/material/Select', '@mui/material/Autocomplete', '@mui/material/FormControlLabel',
            '@mui/material/Switch', '@mui/material/Menu', '@mui/material/MenuItem'
          ],
          'material-ui-dialogs': [ // Dialogs & Overlays
            '@mui/material/Dialog', '@mui/material/DialogTitle', '@mui/material/DialogContent',
            '@mui/material/DialogActions'
          ],
          'material-ui-tables': [ // Data Display
            '@mui/material/Table', '@mui/material/TableBody', '@mui/material/TableCell',
            '@mui/material/TableHead', '@mui/material/TableRow', '@mui/material/TablePagination'
          ],
          'material-ui-icons': ['@mui/icons-material'],
        },
      },
    },
  },
});