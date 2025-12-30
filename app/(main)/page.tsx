import MainPage from "@/pages/main/components/MainPage";

export default async function Page({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
   const params = await searchParams;
   return <MainPage searchParams={params} />;
}
