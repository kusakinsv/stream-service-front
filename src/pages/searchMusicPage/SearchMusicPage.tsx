import { Page } from "@/app/components/page/Page.tsx";
import { Content } from "@/app/components/container/ContentContainer.tsx";
import { SearchMusicWidget } from "@/pages/searchMusicPage/SearchMusicWidget.tsx";

export const SearchMusicPage = () => {
  return <Page>
    {/*<NavigateBar pageName={"Поиск музыки"}/>*/}
    <Content>
     <SearchMusicWidget/>
    </Content>
  </Page>;
};