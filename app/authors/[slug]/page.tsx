type AuthorPageParams = {
  slug: string;
};

export default function AuthorPage({ params }: { params: AuthorPageParams }) {
  const { slug } = params;

  return (
    <div>
      <h1 className="text-3xl font-bold uppercase">{slug}</h1>
    </div>
  );
}
