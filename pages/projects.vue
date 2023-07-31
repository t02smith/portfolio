<template>
  <div></div>
</template>
<script setup lang="ts">
type Project = {
  name: string
  logo_file: string
  description_file: string
}

const projects: Array<Project> = [
  {
    name: "Blockware",
    logo_file: "/projects/blockware/logo.png",
    description_file: "/projects/blockware/description.md"
  },
  {
    name: "RobPress and RobBank",
    logo_file: "/projects/rob/logo.png",
    description_file: "/projects/rob/description.md"
  },
  {
    name: "Untitled Chore App",
    logo_file: "/projects/uca/logo.png",
    description_file: "/projects/uca/description.md"
  },
  {
    name: "This Website",
    logo_file: "/logo.png",
    description_file: "/projects/this_website/description.md"
  },
  {
    name: "WoL-Kit",
    logo_file: "/projects/wolkit/wolkit.png",
    description_file: "/projects/wolkit/description.md"
  }
]

//

const route = useRoute();
const router = useRouter();

const currentProject = ref<Project | null>(null);

/**
 * check the query parameter p for the chosen project
 * else choose the default project
 */
onMounted(() => {
  if (!route.query.p) {
    selectDefaultProject();
    return;
  }

  let selectedProject = route.query.p.toString();
  if (!selectedProject.match("([a-zA-Z]+\\+)*[a-zA-Z]+")) {
    selectDefaultProject();
    return;
  }
  selectedProject = selectedProject.toLowerCase().replaceAll("+", " ");

  const foundProject = projects.find(p => p.name.toLowerCase() === selectedProject)
  if (!foundProject) {
    selectDefaultProject();
    return;
  }
  currentProject.value = foundProject;
})

watch(currentProject, () => {
  if (!currentProject) {
    selectDefaultProject();
    return;
  }

  router.push({
    query: {
      p: currentProject.value!.name.toLowerCase().replaceAll(" ", "+")
    }
  })
})

function selectDefaultProject() {
  currentProject.value = projects[0];
}
</script>
