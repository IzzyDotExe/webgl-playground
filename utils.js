

function clampvector(vec, min, max) {
    if (vec.y > max) {
        vec.y = max;
    } 

    if (vec.y < min) {
        vec.y = min;
    }

    if (vec.x > max) {
        vec.x = max;
    } 

    if (vec.x < min) {
        vec.x = min;
    }

    if (vec.z > max) {
        vec.z = max;
    }

    if (vec.z < min) {
        vec.z = min;
    }

}