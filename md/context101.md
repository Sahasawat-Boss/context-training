# useContext

- Store Data in one place don't need to prop drilling
- Shared Data

## Step
1. createContext >> as a portal 
2. Name a portal
3. Provider Comps and share a value
---
4. useContext(); and pass a name from portal

```
function App(){
    const NameContext = createContext();   1. createContext >> as a portal 2. Name a portal
    const [name] = useState("Nova Designs");

    return{
        <NameContext.Provider value={name}>
        <ComponentOne/>
        </NameContext.Provider>
    }
}
```

Comps4

```
function ComponentFour(){
    const nameHolder = useContext(nameContext);

    return{
        <p>{nameHolder.name}</p>
    }
}
```