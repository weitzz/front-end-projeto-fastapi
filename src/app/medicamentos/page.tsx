import CreateMedicamento from "@/src/components/CreateMedicamento";
import Table from "@/src/components/Table/Table";
import Title from "@/src/components/Title/Title";

const Medicamentos = async () => {
  return (
    <>
      <CreateMedicamento />
      <Title text="Lista de medicamentos" />
      <Table />
    </>
  );
};

export default Medicamentos;
