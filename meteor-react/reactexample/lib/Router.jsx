FlowRouter.route('/', {
    action() {
        ReactLayout.render(MainLayout, { content: <Wall /> });
    }
});