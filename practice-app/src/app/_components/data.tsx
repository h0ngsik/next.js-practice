const fetchDataFromApi = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("엄청난 데이터"), 3000);
  });
};

export default async function Data(): Promise<JSX.Element> {
  const result = await fetchDataFromApi();

  return <div className="px-5 py-10 bg-orange">데이터: {result}</div>;
}
