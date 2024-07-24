import type { InferGetStaticPropsType } from "next";
import { Slo } from "src/entities/Slo";

export const getStaticProps = async () => {
  const res = await fetch("https://run.mocky.io/v3/5abe3f68-c3a2-4e40-9ee6-b28b0804e42d");
  const slos: Slo[] = (await res.json()).slo;
  return { props: { slos } };
};

export default function Slos({
  slos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <table>
      <tbody>
        {slos.map((slo) => {
          return (
            <tr key={slo.id}>
              <td>{slo.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
