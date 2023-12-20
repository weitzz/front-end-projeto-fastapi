import SectionCreateMedicamento from "@/src/components/SectionCreateMedicamento/SectionCreateMedicamento";
import Table from "@/src/components/Table/Table";
import Title from "@/src/components/Title/Title";

const Medicamentos = async () => {
  return (
    <>
      <SectionCreateMedicamento />
      <Title text="Lista de medicamentos" />
      <Table />
    </>
  );
};

export default Medicamentos;
