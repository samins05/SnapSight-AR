
@component
export class Detection extends BaseScriptComponent {
    @input()
    objectTracking: ObjectTracking
    onUpdate() {
        /*
        const headJoint = this.objectTracking.getJointTransform("Head");
        if (headJoint) {
            const headPosition = headJoint.getWorldPosition();
            const userPosition = script.getSceneObject().getTransform().getWorldPosition();
            const distance = headPosition.distance(userPosition);
            print("Distance to user: " + distance);
        }
            */
    }
}