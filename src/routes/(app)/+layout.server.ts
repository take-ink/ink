import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, "/login");
  return {
    currentUser: {
      ...session.user,
      isAdmin: session.user.role === "ADMIN",
    },
  };
};