import { Helmet } from "react-helmet-async";

export default function Tag() {
  return (
    <div>
      <Helmet>
        <title>Tag</title>
        <meta property="og:site_name" content="TwinWorld" />
        <meta property="og:title" content="태그" />
        <meta property="og:url" content="https://twin.world" />
        <meta property="og:description" content="설명 테스트입니다." />
      </Helmet>
      <h1>Tag</h1>
    </div>
  );
}
