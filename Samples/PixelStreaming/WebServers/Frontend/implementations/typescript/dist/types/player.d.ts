export * from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.7';
export * from '@epicgames-ps/lib-pixelstreamingfrontend-ui-ue5.7';
import { PixelStreaming } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.7';
declare global {
    interface Window {
        pixelStreaming: PixelStreaming;
    }
}
