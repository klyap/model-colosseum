import EvaluationSidebar from "@/components/ui/EvaluationSidebar";
import EvaluationDetail from "../(overview)/page";

export default function Evaluation({ params }: { params: { id: string } }) {
  return (
    <>
      <EvaluationSidebar selectedId={params.id}>
        <EvaluationDetail selectedId={params.id} />
      </EvaluationSidebar>
    </>
  );
}
