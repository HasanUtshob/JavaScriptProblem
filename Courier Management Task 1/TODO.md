# Profile Edit Functionality Fix - TODO

## Issues Identified:

- [x] API Endpoint Mismatch: Frontend calls `users/${user.uid}` but backend expects `users/:id` where `:id` is MongoDB ObjectId
- [x] Field Mismatch: Frontend sends multiple fields but backend only updates limited fields
- [x] Missing refetchUserData: AuthProvider doesn't expose `refetchUserData` function
- [x] Date Field Mismatch: Frontend uses `dateOfBirth` but backend expects `dob`

## Tasks to Complete:

- [x] Fix Backend API: Update PATCH `/users/:id` endpoint to accept UID and handle all profile fields
- [x] Add refetchUserData Function: Add missing function to AuthProvider
- [x] Fix Field Mapping: Ensure consistent field names between frontend and backend
- [ ] Test the profile update functionality

## Files to Edit:

- [x] `HurryUp Express server/index.js` - Fix API endpoint and field handling
- [x] `HurryUp Express client/src/Context/Provider/AuthProvider.jsx` - Add refetchUserData function

## Progress:

- [x] Analysis completed
- [x] Plan approved
- [x] Implementation completed

## Changes Made:

### Backend (HurryUp Express server/index.js):

- ✅ Updated PATCH `/users/:id` endpoint to handle both ObjectId and Firebase UID
- ✅ Added support for all profile fields: name, phone, address, city, zipCode, dateOfBirth, dob, photoUrl
- ✅ Added proper error handling and validation
- ✅ Added user existence check before updating
- ✅ Added proper success/error responses

### Frontend (HurryUp Express client/src/Context/Provider/AuthProvider.jsx):

- ✅ Added `refetchUserData` function to AuthProvider
- ✅ Exposed `refetchUserData` in the context value
- ✅ Added proper error handling for refetch functionality

## Next Steps:

- [ ] Test the profile update functionality
- [ ] Verify all fields are being updated correctly
- [ ] Check error handling works as expected
