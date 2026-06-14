import { Page } from "@/app/components/page/Page.tsx";
import { Content } from "@/app/components/container/ContentContainer.tsx";
import { NavigateBar } from "@/app/components/navigateBar/NavigateBar.tsx";
import { SearchMusicWidget } from "@/pages/searchMusicPage/SearchMusicWidget.tsx";

export const SearchMusicPage = () => {
  return <Page>
    <NavigateBar pageName={"Поиск музыки"}/>
    <Content>
     <SearchMusicWidget/>
    </Content>
  </Page>;
};