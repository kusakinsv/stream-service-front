import { Page } from "@/app/components/page/Page.tsx";
import { Content } from "@/app/components/container/ContentContainer.tsx";
import { NavigateBar } from "@/app/components/navigateBar/NavigateBar.tsx";
import { MusicLibraryWidget } from "@/pages/musicLibrary/MusicLibraryWidget.tsx";

export const MusicLibraryPage = () => {
  return <Page>
    <NavigateBar pageName={"Моя музыка"} />
    <Content>
      <MusicLibraryWidget />
    </Content>
  </Page>;
};