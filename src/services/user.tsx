import { TMedicamento, TMedicamentoPost, TUser } from "@/src/types/types";
import { useRouter } from "next/navigation";

//http://localhost:3002/api/medicamentos
//http://localhost:3004/medicamentos
const apiBaseUrl: any = `${process.env.NEXT_API_URL}/usuario/`;

export async function signUp(user: FormData) {
  try {
    const res = await fetch(`${apiBaseUrl}/signup`, {
      method: "POST",
      body: user,
    });

    if (res.ok) {
      const newUsuario = await res.json();
      return newUsuario;
    } else {
      console.error("Erro ao cadastrar usuário");
    }
  } catch (error: any) {
    if (error.response && error.response.data) {
      console.error("Erro ao cadastrar o usuário:", error.response.data);
      alert("Erro ao cadastrar o usuário: " + error.response.data.message);
    } else {
      console.error("Erro ao cadastrar o usuário:", error);
      alert("Erro ao cadastrar o usuário. Tente novamente mais tarde.");
    }
  }
}

export async function login(user: FormData) {
  try {
    const res = await fetch(`${apiBaseUrl}login`, {
      method: "POST",
      body: user,
    });

    if (res.ok) {
      const newUsuario = await res.json();
      return newUsuario;
    } else {
      console.error("Erro ao cadastrar usuário");
    }
  } catch (error: any) {
    if (error.response && error.response.data) {
      console.error("Erro ao cadastrar o usuário:", error.response.data);
      alert("Erro ao cadastrar o usuário: " + error.response.data.message);
    } else {
      console.error("Erro ao cadastrar o usuário:", error);
      alert("Erro ao cadastrar o usuário. Tente novamente mais tarde.");
    }
  }
}

export async function editUser(user: TUser) {
  const res = await fetch(`${apiBaseUrl}${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...user }),
  });
  if (res.ok) {
    const updateMedicamento = res.json();
    return updateMedicamento;
  } else {
    console.error("Erro ao editar medicamento");
  }
}

export async function getId(id: string) {
  const res = await fetch(`${apiBaseUrl}${id}`, {
    cache: "no-store",
  });
  return (await res.json()) as TMedicamento;
}

export async function deleteUser(id: string) {
  await fetch(`${apiBaseUrl}${id}`, {
    method: "DELETE",
  });
}
