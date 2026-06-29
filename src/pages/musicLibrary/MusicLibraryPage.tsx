import { Content } from "@/app/components/container/ContentContainer.tsx";
import { MusicLibraryWidget } from "@/pages/musicLibrary/MusicLibraryWidget.tsx";

export const MusicLibraryPage = () => {
  return (
    <>
      <Content>
        <MusicLibraryWidget />
      </Content>
    </>
  );
};