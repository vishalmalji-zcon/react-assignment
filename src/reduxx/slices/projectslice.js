import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createProjectService, deleteProjectService, getProjectsService, updateProjectService } from "../service/projectService";

export const fetchProjects = createAsyncThunk('fetchProject', async () => {
    // const resposne = await axios.get('https://restcountries.com/v2/all');
    const resposne = await getProjectsService();
    return resposne.data
})

export const createProject = createAsyncThunk('createProject', async (requestBody) => {
    const resposne = await createProjectService(requestBody);
    return resposne.data
})

export const updateProject = createAsyncThunk('updateProject', async (requestBody) => {
    let paramsObj = {
        params: { id: requestBody.id }
    }
    const resposne = await updateProjectService(requestBody, paramsObj)
    // const resposne = await axios.put(`https://localhost:7245/api/Projects/Update/By/Id`, requestBody,{params:{ id: requestBody.id}});
    return resposne.data
})
export const deleteProject = createAsyncThunk('deleteProject', async (projectId) => {
    let paramsObj = {
        params: { id: projectId }
    }
    const resposne = await deleteProjectService(paramsObj)
    // const resposne = await axios.delete(`https://localhost:7245/api/Projects/Delete/By/Id`, {params:{
    //     id: projectId
    // }});
    return resposne.data
})



const projectSlice = createSlice({
    name: 'project',
    initialState: {
        isLoading: false,
        projects: null,
        isError: false,
        isFullfilled: false,
        isProjectCreateFullfilled: false,
        data: null,
        prjectCreatedError: false,
        isProjectUpdateFullfilled: false,
        prjectupdateError: false,
        isProjectDeleteFullfilled: false,
        prjectdeleteError: false,
    },
    reducers: {
        cleanProjectCreateState(state) {
            state.isProjectCreateFullfilled = false
            state.isProjectUpdateFullfilled = false
            state.isProjectDeleteFullfilled = false
            state.prjectdeleteError = false
            state.prjectCreatedError = false
            state.prjectupdateError = false
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProjects.fulfilled, (state, action) => {
            state.isLoading = false;
            state.projects = action.payload;
            state.isFullfilled = true;
        })
        builder.addCase(fetchProjects.rejected, (state, action) => {
            console.log("error", action.payload)
            state.isError = true;
        })
        builder.addCase(createProject.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(createProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = "Project Added";
            state.isProjectCreateFullfilled = true;
        })
        builder.addCase(createProject.rejected, (state, action) => {
            console.log("error", action)
            state.prjectCreatedError = true
            state.data = action.payload
        })
        builder.addCase(updateProject.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = "Project updated";
            state.isProjectUpdateFullfilled = true;
        })
        builder.addCase(updateProject.rejected, (state, action) => {
            console.log("error", action.payload)
            state.prjectupdateError = true
        })

        builder.addCase(deleteProject.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = "Project deleted";
            state.isProjectDeleteFullfilled = true;
        })
        builder.addCase(deleteProject.rejected, (state, action) => {
            console.log("error", action.payload)
            state.prjectdeleteError = true
        })

    }
});

export const { cleanProjectCreateState } = projectSlice.actions

export default projectSlice.reducer;