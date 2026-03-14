// firebase-service.js
// This file contains the logic for interacting with Firebase Firestore for score recording

/**
 * Saves a score record to Firestore.
 * 
 * @param {string} grade - The grade level (e.g., "7", "8", "8-tle", "9", "10")
 * @param {string} name - The student's name
 * @param {number} score - The student's score
 * @param {number} total - The total number of questions
 */
async function saveScoreToFirebase(grade, name, score, total) {
  if (typeof firebase === 'undefined') {
    console.warn("Firebase is not initialized. Score not saved to cloud.");
    return;
  }

  try {
    const db = firebase.firestore();
    const pct = total > 0 ? Math.round((score / total) * 10000) / 100 : 0;
    
    await db.collection(`scores_grade_${grade}`).add({
      name: name || "Anonymous",
      score: score,
      total: total,
      percentage: pct,
      datetime: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    console.log(`Successfully saved score for ${name} (Grade ${grade}) to Firestore.`);
  } catch (error) {
    console.error("Error saving score to Firestore:", error);
  }
}

/**
 * Fetches top scores for a specific grade from Firestore.
 * 
 * @param {string} grade - The grade level
 * @param {number} limit - Number of top scores to fetch
 * @returns {Promise<Array>} - Array of score objects
 */
async function getTopScores(grade, limit = 10) {
  if (typeof firebase === 'undefined') {
    console.warn("Firebase is not initialized.");
    return [];
  }

  try {
    const db = firebase.firestore();
    const snapshot = await db.collection(`scores_grade_${grade}`)
      .orderBy("score", "desc")
      .orderBy("datetime", "asc") // Tie-breaker: earlier score is better
      .limit(limit)
      .get();
    
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error fetching top scores for Grade ${grade}:`, error);
    return [];
  }
}

/**
 * Fetches all scores for a specific grade from Firestore.
 * 
 * @param {string} grade - The grade level
 * @returns {Promise<Array>} - Array of all score objects
 */
async function getAllScores(grade) {
  if (typeof firebase === 'undefined') {
    console.warn("Firebase is not initialized.");
    return [];
  }

  try {
    const db = firebase.firestore();
    const snapshot = await db.collection(`scores_grade_${grade}`)
      .orderBy("datetime", "desc")
      .get();
    
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error fetching all scores for Grade ${grade}:`, error);
    return [];
  }
}

/**
 * Deletes a specific score record from Firestore.
 * 
 * @param {string} grade - The grade level
 * @param {string} id - The document ID to delete
 * @returns {Promise<boolean>} - Success status
 */
async function deleteScoreFromFirebase(grade, id) {
  if (typeof firebase === 'undefined') return false;

  try {
    const db = firebase.firestore();
    await db.collection(`scores_grade_${grade}`).doc(id).delete();
    console.log(`Deleted record ${id} from Grade ${grade}`);
    return true;
  } catch (error) {
    console.error("Error deleting record:", error);
    return false;
  }
}

// Make functions available globally
window.saveScoreToFirebase = saveScoreToFirebase;
window.getTopScores = getTopScores;
window.getAllScores = getAllScores;
window.deleteScoreFromFirebase = deleteScoreFromFirebase;
