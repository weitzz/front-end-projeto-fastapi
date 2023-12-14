import SectionCreateMedicamento from "@/components/SectionCreateMedicamento/SectionCreateMedicamento";
import Table from "@/components/Table/Table";
import Title from "@/components/Title/Title";

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
