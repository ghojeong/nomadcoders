import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

interface Props {
  params: string[];
}

export default function Detail({ params }: Props) {
  const router = useRouter();
  const [title, id] = (params || []) as string[];
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params: { params },
}: any) => {
  return {
    props: { params },
  };
};
