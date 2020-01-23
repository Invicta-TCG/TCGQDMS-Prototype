//Some action occured like event handling
export const collapseSideBar = () => {
    console.log("You collapse side bar: ");
    return {
        type: "COLLAPSE_SIDEBAR"
    }
};

export const expandSideBar = () => {
    console.log("You expand side bar: ");
    return {
        type: "EXPAND_SIDEBAR"
    }
};

