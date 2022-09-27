import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

const NewProject = () => {
  const navigate = useNavigate();
  function createPost(project) {
    // initialize AG-Trader e service
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto Trader</h1>
      <p>Crie o projeto parra adicinar serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto Trader" />
    </div>
  );
};

export default NewProject;
