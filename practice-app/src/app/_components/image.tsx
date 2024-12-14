const fetchImageFromApi = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("이미지 없음"), 7000);
    // setTimeout(() => resolve("이미지 데이터"), 7000);
  });
};

export default async function ImageData(): Promise<JSX.Element> {
  const result = await fetchImageFromApi();
  return <div>이미지: {result}</div>;
}
