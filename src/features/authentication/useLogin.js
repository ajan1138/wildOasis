import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLoging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      queryClient.setQueryData(["user"]);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error(`Provided email or password are incorrect`);
    },
  });

  return { login, isLoging };
}
