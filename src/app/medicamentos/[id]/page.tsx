"use client";

import Button from "@/src/components/Button/Button";
import {
  Control,
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import Title from "@/src/components/Title/Title";

import { editData, getId } from "@/src/services";
import { TMedicamento, TMedicamentoPost } from "@/src/types/types";
import { toast } from "react-toastify";
import Input from "@/src/components/Input/Input";
import DatePickerInput from "@/src/components/DataPicker/DataPicker";
import Checkbox from "@/src/components/Checkbox/Checkbox";
import UploadImage from "@/src/components/FileInput/UploadImage";

interface PageProps {
  params: { id: string; nome: string };
  searchParams: string;
  isEditing: boolean;
}

export default async function MedicamentoDetails({ params }: PageProps) {
  const medicamento = await getId(params.id);
  const methods: UseFormReturn<TMedicamentoPost> = useForm({
    defaultValues: medicamento,
  });

  // ao salvar {
  //   nome: 'teste cad',
  //   preco: '10.88',
  //   data_de_validade: new Date('2024-01-30T13:33:03.000Z'),
  //   quantidade: '50',
  //   estoque: true,
  //   imagem: File {
  //     name:
  //       '225-2254033_transparent-simpsons-png-barney-simpson-png-png-download.png',
  //     lastModified: 1695903663198,
  //     lastModifiedDate: new Date('2023-09-28T12:21:03.000Z'),
  //     webkitRelativePath: '',
  //     size: 416884,
  //     type: 'image/png'
  //   }
  // }

  // ao editar {
  //   id: 16,
  //   nome: 'teste123',
  //   preco: 10.88,
  //   data_de_validade: '9/12/23',
  //   imagem: File {
  //     name:
  //       '225-2254033_transparent-simpsons-png-barney-simpson-png-png-download.png',
  //     lastModified: 1695903663198,
  //     lastModifiedDate: new Date('2023-09-28T12:21:03.000Z'),
  //     webkitRelativePath: '',
  //     size: 416884,
  //     type: 'image/png'
  //   },
  //   estoque: true,
  //   quantidade: '500'
  // }

  console.log(medicamento);

  const onSubmit = (data: TMedicamento) => {
    editData(data);

    toast.success("foi");
  };

  return (
    <div className="grid gap-8 grid-cols-1 mb-8">
      <Title text="Editar" />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-wrap mx-3  py-6">
            <div className="w-full md:w-1/2 px-3 md:mb-0 ">
              <Input
                label="Nome do medicamento"
                name="nome"
                placeholder="medicamento"
                type="text"
                disabled={false}
                control={methods.control}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <Input
                label="Preço"
                name="preco"
                placeholder="0.00"
                type="text"
                disabled={false}
                control={methods.control}
              />
            </div>
          </div>
          <div className="flex flex-wrap mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <DatePickerInput
                name="data_de_validade"
                control={methods.control as unknown as Control<FieldValues>}
              />
            </div>

            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <Input
                label="Quantidade"
                type="number"
                disabled={false}
                name="quantidade"
                control={methods.control}
              />
            </div>
          </div>
          <div className="flex flex-wrap mx-3 mb-4">
            <Checkbox
              name="estoque"
              defaultValue={false}
              control={methods.control as unknown as Control<FieldValues>}
            />
          </div>
          <UploadImage
            name="imagem"
            control={methods.control as unknown as Control<FieldValues>}
          />
          <div className="flex gap-2 items-center justify-between p-6 border-t border-solid rounded-b">
            <Button type="submit" variant="primary">
              Editar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
//https://c004.novisurvey.net/TakeSurveyPage.aspx?s=564ab08aa6354c91a50d8c1e97054ed8&tsid=e9455e4a5cbc4eb4aa7485ccebac509f&c=pt-BR
//https://c004.novisurvey.net/ViewReport.aspx?doid=1030e268493c46e48b096a6d6534e6c6&c=pt-BR&re=bcb4db536e4c4ef997e813f3d7de7491
